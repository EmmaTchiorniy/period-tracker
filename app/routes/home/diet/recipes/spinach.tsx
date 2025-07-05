import BackButton from "~/shared/buttons/back-button";

export default function Spinach() {
  return (
    <div className="pt-16 px-8 relative items-center">
      <BackButton prevHref={"/diet/recipes"}></BackButton>
      <div className="flex justify-center">
        <div className="w-max">
          <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
            <b>Spinach Omelette</b>
          </h3>
          <img
            src="/resources/images/spinach.jpeg"
            alt="A bowl of banana walnut oatmeal"
            className="rounded-lg shadow mb-5"
          />
          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Ingredients</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">2 eggs</li>
              <li className="mb-1 text-[14px]">
                ½ cup fresh spinach (chopped)
              </li>
              <li className="mb-1 text-[14px]">
                1 tbsp milk or plant-based milk (optional, for fluffiness)
              </li>
              <li className="mb-1 text-[14px]">1 tbsp olive oil or butter</li>
              <li className="mb-1 text-[14px]">Salt and pepper to taste</li>
              <li className="mb-1 text-[14px]">
                Optional: 1 tbsp grated cheese or chopped onions
              </li>
            </ul>
          </div>

          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Instructions</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">
                crack the eggs into a bowl and whisk with milk, salt, and pepper
              </li>
              <li className="mb-1 text-[14px]">
                heat oil or butter in a non-stick pan over medium heat
              </li>
              <li className="mb-1 text-[14px]">
                add spinach (and optional onions) and sauté for 1–2 minutes
                until wilted
              </li>
              <li className="mb-1 text-[14px]">
                pour in the egg mixture and tilt the pan to spread it evenly
              </li>
              <li className="mb-1 text-[14px]">
                cook for 2–3 minutes, gently lifting the edges to let uncooked
                egg flow underneath
              </li>
              <li className="mb-1 text-[14px]">
                add cheese if using, then fold the omelette in half and cook for
                another 30 seconds
              </li>
              <li className="mb-1 text-[14px]">
                slide onto a plate and serve hot
              </li>
            </ul>
          </div>

          <div className="text-start mb-5">
            <p className="font-semibold mb-1.5">Why it is beneficial:</p>
            <ul className="list-disc list-outside">
              <li className="mb-1 text-[14px]">
                eggs = rich in protein and B vitamins for energy and hormone
                support
              </li>
              <li className="mb-1 text-[14px]">
                spinach = high in iron, folate, and magnesium
              </li>
              <li className="mb-1 text-[14px]">
                olive oil = healthy fats that support hormone balance
              </li>
              <li className="mb-1 text-[14px]">
                cheese (optional) = calcium for muscle and nerve function
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
