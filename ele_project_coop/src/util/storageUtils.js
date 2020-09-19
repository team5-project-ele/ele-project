// 引入UUID
import UUID from 'uuidjs'
// 定义一个函数---->作用: 用来产生临时id
export function getUUID (){
  return UUID.generate()
}