import { globalGetService } from "../../utils/apiServices"

const getData = async (path, params = {}) => {
  try {
    const response = await globalGetService(path, params)
    return response.data
  } catch (err) {
    return err
  }

}

export const getHeroApi = () => getData('hero', { key: "hackathon" })
export const getHackathonApi = () => getData('hackathon')
export const getPageContentHackathonApi = () => getData('page_content', { key: "hackathon_page" })