
const FAQ = ({ questions }) => {
    const { title, description } = questions;
    return (
        <div>
            <div className="text-purple-500 md:p-10 md:h-[450px] w-full mt-10" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div >
                    <h2 className="card-title font-bold text-xl md:text-3xl mb-5">{title}</h2>
                    <hr />
                    <p className="font-extralight text-xl text-white mt-5">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;