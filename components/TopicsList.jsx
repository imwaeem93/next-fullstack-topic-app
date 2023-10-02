import Link from 'next/link'
import RemoveBtn from './RemoveBtn'
import { HiPencilAlt } from 'react-icons/hi'

//Fetch all topics
const fetchAllTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", { cache: "no-store" })
        if (!res.ok) {
            throw new Error("Failed to fetch topics")
        }

        return res.json()
    } catch (error) {
        console.log(error)
    }
}
const TopicsList = async () => {
    //Call the function and retrieve all topics
    const { topics } = await fetchAllTopics()

    return (
        <>{
            topics.map((topic) => (
                <div className='p-4 rounded-md shadow-lg my-3 flex justify-between gap-5'>
                    <div >
                        <h2 className="font-bold text-2xl">{topic.title}</h2>
                        <div>{topic.description}</div>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <RemoveBtn id={topic._id}/>
                        <Link href={`/editTopic/${topic._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))
        }

        </>
    )
}

export default TopicsList