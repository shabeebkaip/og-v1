import ProgramDetails from '@/app/programs/[id]/contents/ProgramDetails'

const Page = ({ params }) => {
  return (
    <div>
      <ProgramDetails programId={params.id} />
    </div>
  )
}

export default Page