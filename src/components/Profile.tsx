type ProfileProps = {
    greeting: string;
    name: string;
    avatar: string;
}

function Profile ({greeting, name, avatar}: ProfileProps) {
    return (
        <div className="flex justify-between items-center">
            <div>
                <p className="text-left">{greeting}</p>
                <h3 className="text-left text-2xl font-bold">{name}</h3>
            </div>
            <img src={avatar} alt="Profile User" className="w-12 h-12"/>
        </div>
    );
}

export default Profile