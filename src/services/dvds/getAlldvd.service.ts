import dvdRepository from "../../repositories/dvds"


const getAllDvdService=async()=>{

  const allDvds =await dvdRepository.findAll()
  


  return allDvds
}
export default getAllDvdService