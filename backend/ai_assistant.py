def restaurant_ai(prompt):
    prompt = prompt.lower()

    if "menu" in prompt:
        return "We serve Jollof Rice, Fried Rice, Chicken, Shawarma, and Drinks."
    elif "opening" in prompt:
        return "We are open from 8am to 10pm daily."
    elif "location" in prompt:
        return "We are located in the city center."
    else:
        return "I'm your restaurant assistant. Ask me about menu, location, or hours."