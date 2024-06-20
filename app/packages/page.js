import Packages from './contents/package'

const page = ({searchParams}) => {
  const {name} = searchParams
  console.log(name, "sss")
  return (
    <div>
      <Packages query={name} />
    </div>

  )
}

export default page
