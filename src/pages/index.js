
import { useState } from "react";
import axios from "axios";
import { FlavorDropdown, FeelingDropdown } from "./api/flavors";
import {
  SeasonDropdown,
  WeatherDropdown,
  NutritionDropdown,
  TimeConstraintDropdown,
  SkillLevelDropdown,
  BudgetDropdown,
  CulturalDropdown,
  SocialContextDropdown
} from "./api/seasons";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [userRecipe, setUserRecipe] = useState("");
  const [recipeResponse, setRecipeResponse] = useState("");
  const [storyResponse, setStoryResponse] = useState("");

  // Utility to strip HTML tags
  function stripHtmlTags(str) {
    if (!str) return "";
    return str.replace(/<[^>]+>/g, "");
  }
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [selectedFeeling, setSelectedFeeling] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedWeather, setSelectedWeather] = useState("");
  const [selectedNutrition, setSelectedNutrition] = useState("");
  const [selectedTimeConstraint, setSelectedTimeConstraint] = useState("");
  const [selectedSkillLevel, setSelectedSkillLevel] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedCultural, setSelectedCultural] = useState("");
  const [selectedSocialContext, setSelectedSocialContext] = useState("");

  const buildConstraints = () => {
    let constraints = userInput;
    if (userRecipe) constraints += `\nOriginal Recipe to optimize:\n${userRecipe}`;
    if (selectedFlavor) constraints += `\nFlavor: ${selectedFlavor}`;
    if (selectedFeeling) constraints += `\nFeeling: ${selectedFeeling}`;
    if (selectedSeason) constraints += `\nSeason: ${selectedSeason}`;
    if (selectedWeather) constraints += `\nWeather: ${selectedWeather}`;
    if (selectedNutrition) constraints += `\nNutrition: ${selectedNutrition}`;
    if (selectedTimeConstraint) constraints += `\nTime Constraint: ${selectedTimeConstraint}`;
    if (selectedSkillLevel) constraints += `\nSkill Level: ${selectedSkillLevel}`;
    if (selectedBudget) constraints += `\nBudget: ${selectedBudget}`;
    if (selectedCultural) constraints += `\nCultural Context: ${selectedCultural}`;
    if (selectedSocialContext) constraints += `\nSocial Context: ${selectedSocialContext}`;
    return constraints;
  };

  const handleGenerate = async (event) => {
    event.preventDefault();
    setRecipeResponse("Generating recipe...");
    setStoryResponse("");
    const recipePrompt = `Create a recipe with these constraints:\n${buildConstraints()}`;
    try {
      const recipeRes = await axios.post("/api/inference", { text: recipePrompt });
      const recipeText = recipeRes.data.response;
      const cleanRecipe = stripHtmlTags(recipeText.content || recipeText);
      setRecipeResponse(cleanRecipe);
      // Now generate the story, using the cleaned recipe as context
      setStoryResponse("Generating story...");
      const storyPrompt = `You are a food writer. Write a compelling, creative story that introduces and sells the following recipe to the reader. Do NOT include instructions or steps for making the recipe. Instead, focus on the inspiration, emotions, and appeal of the dish.\n\nRecipe:\n${cleanRecipe}`;
      try {
        const storyRes = await axios.post("/api/inference", { text: storyPrompt });
        const cleanStory = stripHtmlTags(storyRes.data.response.content || storyRes.data.response);
        setStoryResponse(cleanStory);
      } catch (error) {
        setStoryResponse("Error generating story. Try again!");
      }
    } catch (error) {
      setRecipeResponse("Error generating recipe. Try again!");
    }
  };

  // Utility to render line breaks for \n
  function renderWithLineBreaks(text) {
    if (!text) return null;
    return text.split('\n').map((line, idx) => (
      <span key={idx}>
        {line}
        <br />
      </span>
    ));
  }

  return (
    <div className="container">
      <h1>Hugging Face AI Chat</h1>
      <form onSubmit={handleGenerate}>
        <input
          type="text"
          placeholder="Ask me anything..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          required
        />
        <textarea
          placeholder="Paste a recipe here to optimize (optional)"
          value={userRecipe}
          onChange={e => setUserRecipe(e.target.value)}
          rows={6}
          style={{ width: '100%', margin: '12px 0', borderRadius: '8px', padding: '12px 16px', fontSize: '1rem', border: '1px solid #ccc', boxSizing: 'border-box' }}
        />
        <div className="dropdowns">
          <FlavorDropdown value={selectedFlavor} onSelect={setSelectedFlavor} className="styled-select" />
          <FeelingDropdown value={selectedFeeling} onSelect={setSelectedFeeling} className="styled-select" />
          <SeasonDropdown value={selectedSeason} onSelect={setSelectedSeason} className="styled-select" />
          <WeatherDropdown value={selectedWeather} onSelect={setSelectedWeather} className="styled-select" />
          <NutritionDropdown value={selectedNutrition} onSelect={setSelectedNutrition} className="styled-select" />
          <TimeConstraintDropdown value={selectedTimeConstraint} onSelect={setSelectedTimeConstraint} className="styled-select" />
          <SkillLevelDropdown value={selectedSkillLevel} onSelect={setSelectedSkillLevel} className="styled-select" />
          <BudgetDropdown value={selectedBudget} onSelect={setSelectedBudget} className="styled-select" />
          <CulturalDropdown value={selectedCultural} onSelect={setSelectedCultural} className="styled-select" />
          <SocialContextDropdown value={selectedSocialContext} onSelect={setSelectedSocialContext} className="styled-select" />
        </div>
        <button type="submit">Generate Recipe & Story</button>
      </form>
      <p><strong>Recipe Response:</strong> {renderWithLineBreaks(recipeResponse.content || recipeResponse)}</p>
      <p><strong>Story Response:</strong> {renderWithLineBreaks(storyResponse.content || storyResponse)}</p>
    </div>
  );
}