const dataFeeds = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1624226167629-963c2f168a6e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'People Walking'
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1624127558215-94bc25566ae0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Sliced Tomato'
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1624125279186-5fb175476e80?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'White Horse'
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1551945326-df678a97c3af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VuJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Sun Flower'
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1624247243614-3b677b1dc08e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Ice Cream cone'
    },
    {
        id: 6,
        img: 'https://images.unsplash.com/photo-1612776572997-76cc42e058c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80',
        desc: 'Nurse in white dress'
    },
    {
        id: 7,
        img: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Pupy'
    },
    {
        id: 8,
        img: 'https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Pupy'
    },
    {
        id: 9,
        img: 'https://images.unsplash.com/photo-1598188306155-25e400eb5078?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Pupy'
    },
    {
        id: 10,
        img: 'https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Pupy'
    },
    {
        id: 11,
        img: 'https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Pupy'
    },
    {
        id: 12,
        img: 'https://images.unsplash.com/photo-1536070910284-fd6224b77024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        desc: 'Pupy'
    },
    {
        id: 13,
        img: 'https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Pupy'
    },
    {
        id: 14,
        img: 'https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Pupy'
    },
    {
        id: 15,
        img: 'https://images.unsplash.com/photo-1583524505974-6facd53f4597?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Pupy'
    },
    {
        id: 16,
        img: 'https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        desc: 'Pupy'
    },
    {
        id: 17,
        img: 'https://images.unsplash.com/photo-1600357077527-930ccbaf7773?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Pupy'
    },
    {
        id: 18,
        img: 'https://images.unsplash.com/photo-1488015795646-7e22a773d72a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Pupy'
    },
    {
        id: 19,
        img: 'https://images.unsplash.com/photo-1548721992-3b00aa33b2b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Pupy'
    },
    {
        id: 20,
        img: 'https://images.unsplash.com/photo-1552944249-481c99e23e97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxjYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: 'Pupy'
    }
]

export default dataFeeds;