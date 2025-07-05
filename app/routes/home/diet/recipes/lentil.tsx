import BackButton from "~/shared/buttons/back-button";

export default function Lentil() {
  return (
    <div className="pt-16 px-8 relative items-center">
      <BackButton prevHref={"/diet/recipes"}></BackButton>
      <div className="flex justify-center">
        <div className="w-max">
          <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
            <b>Lentil Stew</b>
          </h3>
          <img
            src="/resources/images/lentil.jpeg"
            alt="A bowl of banana walnut oatmeal"
            className="rounded-lg shadow mb-5"
          />
          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Ingredients</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">1 tbsp olive oil</li>
              <li className="mb-1 text-[14px]">1 small onion, chopped</li>
              <li className="mb-1 text-[14px]">2 garlic cloves, minced</li>
              <li className="mb-1 text-[14px]">1 medium carrot, chopped</li>
              <li className="mb-1 text-[14px]">1 medium sweet potato, diced</li>
              <li className="mb-1 text-[14px]">
                ¾ cup dry red or green lentils, rinsed
              </li>
              <li className="mb-1 text-[14px]">1 tsp ground cumin</li>
              <li className="mb-1 text-[14px]">
                ½ tsp smoked paprika (optional)
              </li>
              <li className="mb-1 text-[14px]">1 can (400g) diced tomatoes</li>
              <li className="mb-1 text-[14px]">
                3 cups vegetable broth or water
              </li>
              <li className="mb-1 text-[14px]">Salt and pepper to taste</li>
              <li className="mb-1 text-[14px]">
                Optional: handful of spinach or kale at the end
              </li>
            </ul>
          </div>

          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Instructions</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">
                heat olive oil in a pot over medium heat
              </li>
              <li className="mb-1 text-[14px]">
                add onion, garlic, carrot, and sweet potato; sauté for 5–6
                minutes until slightly softened
              </li>
              <li className="mb-1 text-[14px]">
                stir in cumin and paprika, then add lentils and diced tomatoes
              </li>
              <li className="mb-1 text-[14px]">
                pour in the vegetable broth and bring to a boil
              </li>
              <li className="mb-1 text-[14px]">
                reduce heat, cover, and simmer for 25–30 minutes until lentils
                and vegetables are tender
              </li>
              <li className="mb-1 text-[14px]">
                season with salt and pepper; stir in spinach or kale if using,
                and cook 2 more minutes
              </li>
              <li className="mb-1 text-[14px]">
                serve warm, optionally with bread or rice
              </li>
            </ul>
          </div>

          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Why it is beneficial:</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">
                lentils = rich in iron, protein, and fiber to support energy and
                satiety
              </li>
              <li className="mb-1 text-[14px]">
                sweet potatoes = complex carbs and vitamin B6 to help with mood
                regulation
              </li>
              <li className="mb-1 text-[14px]">
                onions, garlic, and spices = anti-inflammatory and
                immune-supporting
              </li>
              <li className="mb-1 text-[14px]">
                optional greens = added magnesium and folate for menstrual
                health
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
