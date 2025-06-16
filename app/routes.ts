import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home/home.tsx"),   
    route("diet/dos-donts", "routes/home/diet/diet-dos-donts.tsx"),
    route("diet/recipes", "routes/home/diet/recipes.tsx"),
    route("exercise/dos-donts", "routes/home/exercise/exercise-dos-donts.tsx"),
    route("exercise/workouts", "routes/home/exercise/workouts.tsx"),
    route("track", "routes/track/track.tsx"),
    route("phases/menstrual", "routes/track/phases/menstrual.tsx"),
    route("phases/follicular", "routes/track/phases/follicular.tsx"),
    route("phases/luteal", "routes/track/phases/luteal.tsx"),
    route("phases/ovulation", "routes/track/phases/ovulation.tsx"),
    route("account", "routes/account/account.tsx"),
    route("account/help", "routes/account/help.tsx"),
    route("account/settings", "routes/account/settings.tsx"),
    route("account/cycle", "routes/account/cycle.tsx"),
    route("account/fitness", "routes/account/fitness.tsx"),
    route("account/diet", "routes/account/diet.tsx"),
] satisfies RouteConfig;
