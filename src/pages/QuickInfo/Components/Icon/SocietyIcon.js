import React from 'react'

function SocietyIcon(props) {
    return (
        <svg width="122" height="128" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={props.className} d="M54.7502 91.2498C53.547 91.2498 52.3708 91.6066 51.3704 92.2751C50.37 92.9435 49.5903 93.8936 49.1299 95.0052C48.6695 96.1168 48.549 97.3399 48.7837 98.52C49.0184 99.7 49.5978 100.784 50.4486 101.635C51.2994 102.486 52.3833 103.065 53.5634 103.3C54.7434 103.534 55.9666 103.414 57.0782 102.953C58.1897 102.493 59.1398 101.713 59.8083 100.713C60.4767 99.7125 60.8335 98.5363 60.8335 97.3332C60.8335 95.7198 60.1926 94.1725 59.0517 93.0316C57.9109 91.8908 56.3636 91.2498 54.7502 91.2498ZM12.1668 85.1665C10.5534 85.1665 9.00611 85.8074 7.86526 86.9483C6.72442 88.0891 6.0835 89.6364 6.0835 91.2498V103.417C6.0835 105.03 6.72442 106.577 7.86526 107.718C9.00611 108.859 10.5534 109.5 12.1668 109.5C13.7802 109.5 15.3275 108.859 16.4684 107.718C17.6092 106.577 18.2502 105.03 18.2502 103.417V91.2498C18.2502 89.6364 17.6092 88.0891 16.4684 86.9483C15.3275 85.8074 13.7802 85.1665 12.1668 85.1665ZM133.833 85.1665C132.22 85.1665 130.673 85.8074 129.532 86.9483C128.391 88.0891 127.75 89.6364 127.75 91.2498V103.417C127.75 105.03 128.391 106.577 129.532 107.718C130.673 108.859 132.22 109.5 133.833 109.5C135.447 109.5 136.994 108.859 138.135 107.718C139.276 106.577 139.917 105.03 139.917 103.417V91.2498C139.917 89.6364 139.276 88.0891 138.135 86.9483C136.994 85.8074 135.447 85.1665 133.833 85.1665ZM103.417 42.5832H79.0835V34.7965C80.9223 33.7349 82.4513 32.2106 83.5185 30.375C84.5858 28.5394 85.154 26.4564 85.1668 24.3332C85.1668 21.1064 83.885 18.0117 81.6033 15.73C79.3216 13.4483 76.227 12.1665 73.0002 12.1665C69.7734 12.1665 66.6787 13.4483 64.397 15.73C62.1153 18.0117 60.8335 21.1064 60.8335 24.3332C60.8463 26.4564 61.4146 28.5394 62.4818 30.375C63.549 32.2106 65.078 33.7349 66.9168 34.7965V42.5832H42.5835C37.7433 42.5832 33.1013 44.5059 29.6788 47.9285C26.2563 51.351 24.3335 55.993 24.3335 60.8332V115.583C24.3335 120.423 26.2563 125.065 29.6788 128.488C33.1013 131.91 37.7433 133.833 42.5835 133.833H103.417C108.257 133.833 112.899 131.91 116.322 128.488C119.744 125.065 121.667 120.423 121.667 115.583V60.8332C121.667 55.993 119.744 51.351 116.322 47.9285C112.899 44.5059 108.257 42.5832 103.417 42.5832ZM83.4635 54.7498L80.4218 66.9165H65.5785L62.5368 54.7498H83.4635ZM109.5 115.583C109.5 117.197 108.859 118.744 107.718 119.885C106.578 121.026 105.03 121.667 103.417 121.667H42.5835C40.9701 121.667 39.4228 121.026 38.2819 119.885C37.1411 118.744 36.5002 117.197 36.5002 115.583V60.8332C36.5002 59.2198 37.1411 57.6725 38.2819 56.5316C39.4228 55.3908 40.9701 54.7498 42.5835 54.7498H50.0052L54.7502 74.4598C55.0832 75.8096 55.8686 77.0045 56.9754 77.8457C58.0823 78.687 59.4438 79.1237 60.8335 79.0832H85.1668C86.5565 79.1237 87.9181 78.687 89.0249 77.8457C90.1318 77.0045 90.9171 75.8096 91.2502 74.4598L95.9952 54.7498H103.417C105.03 54.7498 106.578 55.3908 107.718 56.5316C108.859 57.6725 109.5 59.2198 109.5 60.8332V115.583ZM91.2502 91.2498C90.047 91.2498 88.8708 91.6066 87.8704 92.2751C86.87 92.9435 86.0903 93.8936 85.6299 95.0052C85.1695 96.1168 85.049 97.3399 85.2837 98.52C85.5184 99.7 86.0978 100.784 86.9486 101.635C87.7994 102.486 88.8833 103.065 90.0634 103.3C91.2434 103.534 92.4666 103.414 93.5781 102.953C94.6897 102.493 95.6398 101.713 96.3083 100.713C96.9767 99.7125 97.3335 98.5363 97.3335 97.3332C97.3335 95.7198 96.6926 94.1725 95.5517 93.0316C94.4109 91.8908 92.8636 91.2498 91.2502 91.2498Z" fill="#455A64" stroke="black" />
        </svg>
    )
}

export default SocietyIcon
