import { globalGetService } from "../../utils/apiServices"

const getData = async (path, params = {}) => {
  try {
    const response = await globalGetService(path, params)
    return response.data
  } catch (err) {
    return err
  }

}

export const getProgramHeroApi = () => getData('hero', { key: "program" })
export const getProgramListApi = () => getData('programs')
