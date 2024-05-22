import { globalGetService } from "@/app/utils/apiServices"

const getData = async (path, params = {}) => {
  try {
    const response = await globalGetService(path, params)
    return response.data
  } catch (err) {
    return err
  }
}

export const getHeroApi = () => getData('hero', { key: "contact_us" })
export const getCommunityListApi = () => getData('community_list')