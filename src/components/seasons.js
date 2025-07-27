// import React from "react";

// export function TimeConstraintDropdown({ value, onSelect, className }) {
//     const timeOptions = [
//         "5 minutes",
//         "10 minutes",
//         "15 minutes",
//         "30 minutes",
//         "45 minutes",
//         "1 hour",
//         "2 hours",
//         "Overnight",
//         "No time constraint"
//     ];
//     return (
//         <select value={value} onChange={e => onSelect(e.target.value)} className={className}>
//             <option value="">Select time constraint</option>
//             {timeOptions.map(t => <option key={t} value={t}>{t}</option>)}
//         </select>
//     );
// }

// export function SkillLevelDropdown({ value, onSelect, className }) {
//     const skillLevels = [
//         "Beginner",
//         "Intermediate",
//         "Advanced",
//         "Expert",
//         "No skill required"
//     ];
//     return (
//         <select value={value} onChange={e => onSelect(e.target.value)} className={className}>
//             <option value="">Select skill level</option>
//             {skillLevels.map(s => <option key={s} value={s}>{s}</option>)}
//         </select>
//     );
// }

// export function BudgetDropdown({ value, onSelect, className }) {
//     const budgetOptions = [
//         "Low budget",
//         "Medium budget",
//         "High budget",
//         "Luxury",
//         "Cost not important"
//     ];
//     return (
//         <select value={value} onChange={e => onSelect(e.target.value)} className={className}>
//             <option value="">Select budget/cost constraint</option>
//             {budgetOptions.map(b => <option key={b} value={b}>{b}</option>)}
//         </select>
//     );
// }

// export function CulturalDropdown({ value, onSelect, className }) {
//     const culturalOptions = [
//         "Thai",
//         "Indian",
//         "Chinese",
//         "Japanese",
//         "Italian",
//         "French",
//         "Mexican",
//         "American",
//         "Mediterranean",
//         "Middle Eastern",
//         "African",
//         "Nordic",
//         "Spanish",
//         "Korean",
//         "Vietnamese",
//         "Other"
//     ];
//     return (
//         <select value={value} onChange={e => onSelect(e.target.value)} className={className}>
//             <option value="">Select cultural context</option>
//             {culturalOptions.map(c => <option key={c} value={c}>{c}</option>)}
//         </select>
//     );
// }

// export function SocialContextDropdown({ value, onSelect, className }) {
//     const socialOptions = [
//         "Family dinner",
//         "Date night",
//         "Cooking for one",
//         "Party",
//         "Picnic",
//         "Holiday meal",
//         "Potluck",
//         "Kids meal",
//         "Casual lunch",
//         "Formal event",
//         "Brunch",
//         "Breakfast",
//         "Other"
//     ];
//     return (
//         <select value={value} onChange={e => onSelect(e.target.value)} className={className}>
//             <option value="">Select social context</option>
//             {socialOptions.map(s => <option key={s} value={s}>{s}</option>)}
//         </select>
//     );
// }

// export function NutritionDropdown({ value, onSelect, className }) {
//     const nutritionOptions = [
//         "Low Carb",
//         "High Protein",
//         "Low Fat",
//         "High Fiber",
//         "Gluten Free",
//         "Vegan",
//         "Vegetarian",
//         "Keto",
//         "Paleo",
//         "Dairy Free",
//         "Nut Free",
//         "Sugar Free",
//         "Low Sodium",
//         "Whole30",
//         "Mediterranean",
//         "Balanced",
//         "Low Calorie",
//         "High Calorie",
//         "Raw",
//         "Organic"
//     ];
//     return (
//         <select value={value} onChange={e => onSelect(e.target.value)} className={className}>
//             <option value="">Select nutrition</option>
//             {nutritionOptions.map(n => <option key={n} value={n}>{n}</option>)}
//         </select>
//     );
// }

// export function SeasonDropdown({ value, onSelect, className }) {
//     const seasons = [
//         "Spring",
//         "Summer",
//         "Autumn",
//         "Winter",
//         "Late Spring",
//         "Early Summer",
//         "Late Summer",
//         "Early Autumn",
//         "Late Autumn",
//         "Early Winter",
//         "Late Winter",
//         "Monsoon",
//         "Dry Season",
//         "Wet Season"
//     ];
//     return (
//         <select value={value} onChange={e => onSelect(e.target.value)} className={className}>
//             <option value="">Select season</option>
//             {seasons.map(s => <option key={s} value={s}>{s}</option>)}
//         </select>
//     );
// }

// export function WeatherDropdown({ value, onSelect, className }) {
//     const weatherOptions = [
//         "Clear",
//         "Mostly Clear",
//         "Partly Cloudy",
//         "Mostly Cloudy",
//         "Overcast",
//         "Sunny",
//         "Rainy",
//         "Shower Rain",
//         "Drizzle",
//         "Thunderstorm",
//         "Snowy",
//         "Hail",
//         "Mist",
//         "Windy",
//         "Breezy",
//         "Humid",
//         "Dry",
//         "Hot",
//         "Cold",
//     ];
//     return (
//         <select value={value} onChange={e => onSelect(e.target.value)} className={className}>
//             <option value="">Select weather</option>
//             {weatherOptions.map(w => <option key={w} value={w}>{w}</option>)}
//         </select>
//     );
// }
