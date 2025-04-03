import Li from "../components/li";

type Post = {
    id: string,
    title:string,
}
export default async function DataValueFind({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const params = await searchParams;
    const titleparameter = typeof params.query === "string" ? params.query : "";
    const url = 'https://jsonplaceholder.typicode.com/posts';
    
    try {
        const response = await fetch(url);
        const posts : Post[] = await response.json();
        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(titleparameter.toLowerCase()));
        console.log(posts[0].title.toLowerCase(), "---", titleparameter.toLowerCase());
        
        return (
            <div className="w-max h-max m-5">
            <h1 className="text-2xl">Searched for &quot;{titleparameter}&quot;</h1>
            <ul>
                
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => <Li key={post.id}>{post.title}</Li>)
                ) : (
                    <h1>no data found</h1>
                )}
            </ul>
            </div>
        );
    } catch (error) {
        console.error("Error fetching posts:", error);
        return <p>Failed to load posts.</p>;
    }
}