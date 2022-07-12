/**
 * @author Cavan
 * @func 根据 path 判断是否部分在数组中
 * @param {path string}
 * @return boolean 
 */

 export const isPathPartlyExisted = (path) => {
    const arr = ['/orderdetail'];
    // 任何情况下 结果数组的第二项都是arr里的匹配项 return true
    const pathRes = path.split('/');
    if (pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true;
    return false;
}