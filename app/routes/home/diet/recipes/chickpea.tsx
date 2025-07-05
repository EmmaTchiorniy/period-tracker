import BackButton from "~/shared/buttons/back-button";

export default function Chickpea() {
  return (
    <div className="pt-16 px-8 relative items-center">
      <BackButton prevHref={"/diet/recipes"}></BackButton>
      <div className="flex justify-center">
        <div className="w-max">
          <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
            <b>Chickpea Curry</b>
          </h3>
          <img
            src="/resources/images/chickpea.jpeg"
            alt="A bowl of banana walnut oatmeal"
            className="rounded-lg shadow mb-5"
          />
          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Ingredients</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">1 tbsp olive oil</li>
              <li className="mb-1 text-[14px]">
                1 small onion, finely chopped
              </li>
              <li className="mb-1 text-[14px]">2 garlic cloves, minced</li>
              <li className="mb-1 text-[14px]">1 tsp grated ginger</li>
              <li className="mb-1 text-[14px]">
                1 tbsp curry powder (or to taste)
              </li>
              <li className="mb-1 text-[14px]">
                1 can (400g) chickpeas, drained and rinsed
              </li>
              <li className="mb-1 text-[14px]">
                1 can (400ml) diced tomatoes or tomato passata
              </li>
              <li className="mb-1 text-[14px]">
                2 cups fresh spinach (or 1 cup frozen)
              </li>
              <li className="mb-1 text-[14px]">Salt and pepper to taste</li>
              <li className="mb-1 text-[14px]">Cooked brown rice, to serve</li>
              <li className="mb-1 text-[14px]">
                Optional: fresh cilantro, lime juice
              </li>
            </ul>
          </div>

          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Instructions</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">
                heat olive oil in a pan over medium heat
              </li>
              <li className="mb-1 text-[14px]">
                sauté onion for 3–4 minutes until soft, then add garlic and
                ginger
              </li>
              <li className="mb-1 text-[14px]">
                stir in curry powder and cook for 1 minute until fragrant
              </li>
              <li className="mb-1 text-[14px]">
                add chickpeas and tomatoes; simmer for 10–12 minutes, stirring
                occasionally
              </li>
              <li className="mb-1 text-[14px]">
                add spinach and cook for another 2–3 minutes until wilted
              </li>
              <li className="mb-1 text-[14px]">
                season with salt and pepper to taste
              </li>
              <li className="mb-1 text-[14px]">
                serve over brown rice and top with fresh cilantro and lime juice
                if desired
              </li>
            </ul>
          </div>

          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Why it is beneficial:</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">
                chickpeas = high in iron, protein, and fiber for sustained
                energy
              </li>
              <li className="mb-1 text-[14px]">
                spinach = excellent source of magnesium and folate
              </li>
              <li className="mb-1 text-[14px]">
                curry spices = anti-inflammatory and digestion-supporting
              </li>
              <li className="mb-1 text-[14px]">
                brown rice = complex carbs to stabilize blood sugar and improve
                mood
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
