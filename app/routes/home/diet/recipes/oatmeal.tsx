import BackButton from "~/shared/buttons/back-button";

export default function Oatmeal() {
  return (
    <div className="pt-16 px-8 relative items-center">
      <BackButton prevHref={"/diet/recipes"}></BackButton>
      <div className="flex justify-center">
        <div className="w-max">
          <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
            <b>Oatmeal Bowl</b>
          </h3>
          <img
            src="/resources/images/oatmeal.jpeg"
            alt="A bowl of banana walnut oatmeal"
            className="rounded-lg shadow mb-5"
          />
          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Ingredients</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">½ cup rolled oats</li>
              <li className="mb-1 text-[14px]">
                1 cup water or milk (dairy or plant-based like oat/almond)
              </li>
              <li className="mb-1 text-[14px]">1 small ripe banana, sliced</li>
              <li className="mb-1 text-[14px]">1 tbsp chopped walnutzzz</li>
              <li className="mb-1 text-[14px]">½ tsp ground cinnamon</li>
              <li className="mb-1 text-[14px]">1 tsp honey or maple syrup</li>
              <li className="mb-1 text-[14px]">
                optional toppings: flaxseeds, chia seeds, nut butter, or berries
              </li>
            </ul>
          </div>
          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Instructions</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">
                combine oats, water (or milk), and salt in a small saucepan
              </li>
              <li className="mb-1 text-[14px]">
                bring to a simmer over medium heat, stirring occasionally
              </li>
              <li className="mb-1 text-[14px]">
                once it begins to thicken (after ~3–5 minutes), add half of the
                sliced banana and cinnamon. Stir gently to mix. This softens and
                naturally sweetens the oats.
              </li>
              <li className="mb-1 text-[14px]">
                cook for another 2–3 minutes, until the oats are creamy and the
                banana has mostly blended in
              </li>
              <li className="mb-1 text-[14px]">pour the oatmeal into a bowl</li>
              <li className="mb-1 text-[14px]">
                top with the remaining banana slices, chopped walnuts, and a
                drizzle of honey or maple syrup if desired
              </li>
              <li className="mb-1 text-[14px]">
                sprinkle extra cinnamon, flaxseeds, or nut butter if using
              </li>
            </ul>
          </div>
          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Why it is benificial: </p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">
                oats = iron, magnesium, fiber
              </li>
              <li className="mb-1 text-[14px]">
                banana = potassium & mood support
              </li>
              <li className="mb-1 text-[14px]">
                walnuts = omega-3s & anti-inflammatory
              </li>
              <li className="mb-1 text-[14px]">
                cinnamon = may help ease cramps
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
