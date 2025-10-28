export async function generateMetaData({params}) {
   
    const { recipeId } = params;

    return{
        title: `${recipeId} title`,
        description: `${recipeId} desc goes here`,
    };
}

export default async function Recipe({ params }) {
    const {recipeId} = await params;

    return (
        <h1 className="text-center font-bold p-2">{recipeId}</h1>
        
    );
}