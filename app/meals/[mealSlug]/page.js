export default async function MealDetailsPage({params}) {
    const { mealSlug } = await params;
    console.log("mealSlug: ", mealSlug);
  return <h1>Meal Details Page</h1>
}