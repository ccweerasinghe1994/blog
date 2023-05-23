import Image from 'next/image';

const ProfilePic = () => {
	return (
		<section className="w-full mx-auto">
			<Image
				alt="chamara"
				width={200}
				height={200}
				src={'/images/profile.jpg'}
				priority
				className=" border-2 border-black dark:border-slate-500 drop-shadow-xl shadow-black mx-auto mt-8 rounded-full"
			/>
		</section>
	);
};
export default ProfilePic;
