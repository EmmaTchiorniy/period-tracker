import BackButton from "~/shared/buttons/back-button";

export default function Stirfry() {
  return (
    <div className="pt-16 px-8 relative items-center">
      <BackButton prevHref={"/diet/recipes"}></BackButton>
      <div className="flex justify-center">
        <div className="w-max">
          <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
            <b>Stir-Fry</b>
          </h3>
          <img
            src="/app/images/stirfry.jpeg"
            alt="A bowl of banana walnut oatmeal"
            className="rounded-lg shadow mb-5"
          />
          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Ingredients</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">
                200g firm tofu, cut into cubes
              </li>
              <li className="mb-1 text-[14px]">1 tbsp soy sauce</li>
              <li className="mb-1 text-[14px]">
                1 tbsp sesame oil or olive oil
              </li>
              <li className="mb-1 text-[14px]">1 clove garlic, minced</li>
              <li className="mb-1 text-[14px]">½ tsp grated ginger</li>
              <li className="mb-1 text-[14px]">1 cup broccoli florets</li>
              <li className="mb-1 text-[14px]">½ bell pepper, sliced</li>
              <li className="mb-1 text-[14px]">
                1 tsp cornstarch (optional, for crispier tofu)
              </li>
              <li className="mb-1 text-[14px]">
                Optional toppings: sesame seeds, green onions
              </li>
            </ul>
          </div>

          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Instructions</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">
                press the tofu to remove excess moisture, then cut into cubes
              </li>
              <li className="mb-1 text-[14px]">
                toss tofu with a little cornstarch (optional) for extra
                crispiness
              </li>
              <li className="mb-1 text-[14px]">
                heat oil in a pan over medium-high heat and fry tofu cubes until
                golden on all sides (about 6–8 minutes)
              </li>
              <li className="mb-1 text-[14px]">
                remove tofu and set aside; add garlic, ginger, and vegetables to
                the pan
              </li>
              <li className="mb-1 text-[14px]">
                stir-fry for 3–4 minutes until vegetables are tender-crisp
              </li>
              <li className="mb-1 text-[14px]">
                add tofu back in, drizzle with soy sauce, and stir to combine
              </li>
              <li className="mb-1 text-[14px]">
                cook for another 1–2 minutes, then serve hot with rice or
                noodles
              </li>
            </ul>
          </div>

          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Why it is beneficial:</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">
                tofu = rich in plant-based protein and iron
              </li>
              <li className="mb-1 text-[14px]">
                broccoli = contains calcium and vitamin C to support iron
                absorption
              </li>
              <li className="mb-1 text-[14px]">
                bell pepper = high in antioxidants and supports the immune
                system
              </li>
              <li className="mb-1 text-[14px]">
                ginger & garlic = anti-inflammatory and digestion-friendly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
