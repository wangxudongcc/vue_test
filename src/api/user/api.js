import request from '@/api/request';

export function getList() {
    return request('/api/getList')
}

export function getItem(id) {
    return request('/api/getList').then(res => {
        return {
            ...res,
           data: res.data.find(item => item.id === id) || null
        }
    }).catch(err => err)
}