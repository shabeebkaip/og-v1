import { globalGetService } from "@/app/utils/apiServices"

const getData = async (path, params = {}) => {
  try {
    const response = await globalGetService(path, params)
    return response.data
  } catch (err) {
    return err
  }

}

export const getCareerHeroApi = () => getData('hero', { key: "career" })
export const getExploreApi = () => getData('career/exploreBeyond')
export const getGlobalApi = () => getData('career/globalHub')
export const getCareerList = () => getData('career/career_list')
export const getPageContentCareerApi = () => getData('page_content', { key: "career" })


