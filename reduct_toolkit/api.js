
export const removeData = async (itemId) => {
    try {
        const response = await fetch(`http://10.0.2.2:3000/LopHoc/${itemId}`, {
            method:"DELETE"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const updateData = async (itemId, updateItem) => {
    try {
        const response = await fetch(`http://10.0.2.2:3000/LopHoc/${itemId}`, {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateItem),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
export const addData = async (newItem) => {
    try {
        const response = await fetch('http://10.0.2.2:3000/LopHoc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
