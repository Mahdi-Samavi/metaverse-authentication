import { useMoralis } from 'react-moralis'

export default function ChangeUsername() {
    const { setUserData, isUserUpdating, userError, user } = useMoralis();

    const setUsername = () => {
        const username = prompt(`Enter your new Username (current: ${user.getUsername()})`)

        if (!username) return;

        setUserData({
            username,
        });
    }
    return (
        <div className="absolute top-5 right-5 text-sm">
            <button
                onClick={setUsername}
                disabled={isUserUpdating}
                className="hover:text-pink-700"
            >Change your Username</button>
        </div>
    )
}