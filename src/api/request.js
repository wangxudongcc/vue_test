import AllData from '@/api/data'
export default (path) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = AllData[path];
            if (data) {
                resolve({
                    status: 200,
                    success: true,
                    data: data,
                });
            } else {
                reject({
                    status: 500,
                    success: false,
                    message: 'Not Found',
                });
            }
        }, 20);
    })
}