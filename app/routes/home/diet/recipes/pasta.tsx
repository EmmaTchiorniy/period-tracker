import BackButton from "~/shared/buttons/back-button";

export default function Pasta() {
  return (
    <div className="pt-16 px-8 relative items-center">
      <BackButton prevHref={"/diet/recipes"}></BackButton>
      <div className="flex justify-center">
        <div className="w-max">
          <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
            <b>Protein Pasta</b>
          </h3>
          <img
            src="/resources/images/pasta.jpeg"
            alt="A bowl of banana walnut oatmeal"
            className="rounded-lg shadow mb-5"
          />
          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Ingredients</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">
                150g whole wheat pasta (or pasta of choice)
              </li>
              <li className="mb-1 text-[14px]">1 tbsp olive oil</li>
              <li className="mb-1 text-[14px]">
                1 small onion, finely chopped
              </li>
              <li className="mb-1 text-[14px]">2 garlic cloves, minced</li>
              <li className="mb-1 text-[14px]">
                ¾ cup cooked lentils (or ½ cup dry red lentils, rinsed)
              </li>
              <li className="mb-1 text-[14px]">
                1 can (400g) diced tomatoes or tomato passata
              </li>
              <li className="mb-1 text-[14px]">
                1 tsp dried oregano or Italian herbs
              </li>
              <li className="mb-1 text-[14px]">Salt and pepper to taste</li>
              <li className="mb-1 text-[14px]">
                Optional: fresh basil, grated parmesan, or nutritional yeast
              </li>
            </ul>
          </div>

          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Instructions</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">
                cook pasta according to package instructions; drain and set
                aside
              </li>
              <li className="mb-1 text-[14px]">
                heat olive oil in a pan over medium heat
              </li>
              <li className="mb-1 text-[14px]">
                sauté onion and garlic until soft (about 3–4 minutes)
              </li>
              <li className="mb-1 text-[14px]">
                add lentils, diced tomatoes, and herbs
              </li>
              <li className="mb-1 text-[14px]">
                simmer for 10–15 minutes (add a splash of water if too thick)
              </li>
              <li className="mb-1 text-[14px]">
                season with salt and pepper to taste
              </li>
              <li className="mb-1 text-[14px]">
                combine sauce with cooked pasta and stir well
              </li>
              <li className="mb-1 text-[14px]">
                top with fresh basil, cheese, or nutritional yeast if desired
              </li>
            </ul>
          </div>

          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Why it is beneficial:</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">
                whole wheat pasta = complex carbs for steady energy and fiber
              </li>
              <li className="mb-1 text-[14px]">
                lentils = plant-based protein and iron, great for menstrual
                support
              </li>
              <li className="mb-1 text-[14px]">
                tomatoes = rich in lycopene and vitamin C, supports iron
                absorption
              </li>
              <li className="mb-1 text-[14px]">
                olive oil & herbs = anti-inflammatory and heart-healthy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
