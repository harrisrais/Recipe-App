export async function generateMetaData({params}) {
    const { recipeId } = params;
    return{
        title: `${recipeId} title`,
        description: `${recipeId} desc goes here`,
    };
}

export default async function Recipe({ params }) {
    const {recipeId} = await params;

    const res = await fetch("https://dummyjson.com/recipes/${recipeId}");
    const recipe = await res.json();

    return (
        <h1 className="text-center font-bold p-2">{recipe.name}</h1>
    );
}