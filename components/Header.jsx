import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

export default function Header() {
    const { user } = useMoralis();
    return (
        <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <a href="https://mahdi-samavi.ir/en" target="_blank" rel="noreferrer" className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <svg viewBox="0 0 176 202.1" className="w-10 fill-pink-500 md:w-20"><polygon points="98.2,192.5 88,198.7 3,149.6 3,147.3 57.4,115.9 57.4,140.3 43.6,148.3 77.8,168 77.8,104.1 88.3,98 173,146.9 173,149.4 118.6,180.8 118.6,156.7 132.9,148.4 98.2,128.4"></polygon><polygon points="173,124.5 173,52 88.9,3.5 3,53 3,123.6 57.4,92.2 57.4,67.2 24.3,86.2 24.3,64.4 77.8,33.6 77.8,80.4 88.4,74.3 98.2,80.5 98.2,33.1 151.7,64 151.7,87.2 118.6,68.1 118.6,93.1"></polygon></svg>
                </a>

                <div className="col-span-4 text-left lg:text-center">
                    <div className="relative h-48 w-48 border-pink-500 border-8 rounded-full lg:mx-auto">
                        <Avatar logoutOnPress />
                    </div>

                    <h1 className="text-3xl">Welcome to the Metaverse</h1>
                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

                    <ChangeUsername />
                </div>
            </div>
        </div>
    );
}
