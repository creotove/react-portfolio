import Marquee from "react-fast-marquee";
const MyMarquee = ({ text, direction = 'left' }) => {
    return (
        <section className="fixed bottom-0 bg-x-red w-full">
            <Marquee autoFill={false} direction={direction} className="py-2 no-scrollbar">
                <span className="text-x-smoke font-bold text-xl md:text-3xl">{text}</span>
            </Marquee>
        </section>
    );
};

export default MyMarquee;