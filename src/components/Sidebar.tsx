import { useGetLessonsQuery } from "../graphql/generated";
import { Lessons } from "./Lessons";

export function Sidebar(){
    const { data } = useGetLessonsQuery();
    console.log(data);

    return(
        // O "[]" serve para especificar o tamanho exato que quer aquele parâmetro
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma das aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson => {
                    return (
                        <Lessons 
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}