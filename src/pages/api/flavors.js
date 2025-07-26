export function FeelingDropdown({ value, onSelect, className }) {
    const feelings = [
        "Acceptance", "Admiration", "Adoration", "Affection", "Aliveness", "Amazement", "Amusement", "Awe", "Bliss", "Calm",
        "Caring", "Cheerfulness", "Compassion", "Confidence", "Content", "Contentment", "Delight", "Determination",
        "Devotion", "Eagerness", "Ecstasy", "Enchantment", "Encouragement", "Engaged", "Engagement", "Enjoyment",
        "Enlightenment", "Enthusiasm", "Euphoria", "Exhilaration", "Excitement", "Expectation", "Fascination", "Fondness",
        "Freedom", "Gladness", "Gratitude", "Harmony", "Happiness", "Hope", "Humility", "Empathy", "Inspiration",
        "Insightful", "Interest", "Intrigue", "Invigorated", "Joy", "Joviality", "Kindness", "Lively", "Love", "Loyalty",
        "Optimism", "Passion", "Peacefulness", "Pleased", "Pride", "Radiant", "Rapture", "Resilience", "Relief", "Renewed",
        "Relaxation", "Relaxed", "Satisfaction", "Security", "Serenity", "Strong", "Supportive", "Surprise",
        "Sympathy", "Tenderness", "Thankfulness", "Thrill", "Triumph", "Trust", "Wonder", "Warmth", "Well‑being",
        "Zest", "Enthralment", "Curiosity", "Nostalgia", "Craving", "Anticipation", "Mindfulness", "Creativity",
        "Empowerment", "Self‑confidence", "Self‑understanding", "Courage", "Belonging", "Inner peace", "Calmness",
        "Tranquility", "Presence", "Mindful awareness", "Clarity", "Grounded", "Centered", "Peace of mind", "Balance",
        "Equanimity", "Self-compassion", "Self-acceptance", "Self-forgiveness", "Common humanity",
        "Emotional resilience", "Meta-awareness", "Mood clarity", "Emotional regulation", "Hopefulness",
        "Self-worth", "Strength", "Self-trust", "Purpose", "Meaningfulness", "Connection", "Fulfillment",
        "Flow", "Elation", "Joyousness", "Motivation", "Renewal", "Openness", "Expansion", "Growth mindset",
        "Positive expectancy", "Affirmed", "Validated", "Supported", "Safety", "Self‑belief", "Peaceful focus",
        "Stillness", "Mindful presence", "Attuned", "Reflective insight", "Centered calm", "Serene confidence",
        "Peaceful strength"
    ];
    return (
        <select value={value} onChange={e => onSelect(e.target.value)} className={className}>
            <option value="">Select feeling</option>
            {feelings.map(f => <option key={f} value={f}>{f}</option>)}
        </select>
    );
}

import { useState, useEffect } from "react";

export function FlavorDropdown({ value, onSelect, className }) {
    const [flavors, setFlavors] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
            .then(res => res.json())
            .then(data => {
                const list = data.meals.map(m => m.strIngredient).filter(Boolean).sort();
                setFlavors(list);
            });
    }, []);

    return (
        <select value={value} onChange={e => onSelect(e.target.value)} className={className}>
            <option value="">Select flavor</option>
            {flavors.map(f => <option key={f} value={f}>{f}</option>)}
        </select>
    );
}
