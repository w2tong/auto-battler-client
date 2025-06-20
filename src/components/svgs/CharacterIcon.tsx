export default function CharacterIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M8.00006 3C8.82849 3 9.50006 2.32843 9.50006 1.5C9.50006 0.671573 8.82849 0 8.00006 0C7.17163 0 6.50006 0.671573 6.50006 1.5C6.50006 2.32843 7.17163 3 8.00006 3Z" />
            <path d="M15 4V6H10.5454L10.9898 16H8.98778L8.76561 11H7.23426L7.01198 16H5.01L5.45456 6H1V4H15Z" />
        </svg>
    );
}
