import { globalGetService } from "@/app/utils/apiServices"

const getData = async (path, params = {}) => {
  try {
    const response = await globalGetService(path, params)
    if (path === "news") {
      return response
    } else {
      return response.data
    }
  } catch (err) {
    return err
  }
}

export const getHeroApi = () => getData('hero', { key: "news" })
export const getNewsListApi = (query) => getData('news', query)
