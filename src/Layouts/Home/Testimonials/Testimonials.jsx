import React from 'react';


const Testimonials = () => {
    return (
        <div className='flex max-w-screen-xl mx-auto bg-gradient-to-r from-slate-400 to-slate-50 p-8'>
            <div className="testimonials w-3/5">
                <h1 className='text-3xl font-bold text-white'>PATIENT TESTIMONIALS</h1>
                <span className='divider w-2/5'></span>
                <p>It’s always the word of mouth that’s the best advice. Here are some of our…</p>

                <div className="parent mt-8 flex gap-6">
                    {/* review 01 */}
                    <div className="img h-[200px] w-[200px] ">
                    <img src="https://media.istockphoto.com/id/1414358368/photo/portrait-of-woman-in-late-teens-standing-in-vineyard.webp?b=1&s=170667a&w=0&k=20&c=3MNVVB_TI93USYY0JIWpBT6pk0oPFMqMAo1jNOfkdKs=" alt="User img" className='rounded-full border-4 border-cyan-500'/>

                    <p className='text-xl mt-3 font-semibold'>PAULA SMITH</p>

                    <img src="	https://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/signature.png" alt="User signature" className='w-[120px] mt-5' />
                    </div>

                    <div className="text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br> Officiis ducimus quo sapiente? Vitae repudiandae doloremque<br></br> sunt fugit veniam corrupti! Voluptates optio, accusamus porro<br></br> iste totam modi voluptatum sunt temporibus rem molestiae.<br></br> Non ex recusandae repellendus, id ipsum veniam sint optio?</p>
                    </div>
                    {/* review 02 */}
                    <div className="img h-[200px] w-[200px] ">
                    <img src="https://media.istockphoto.com/id/1307694376/photo/portrait-of-young-indian-man-with-folded-hands.webp?b=1&s=170667a&w=0&k=20&c=AshnZBKAGaRnF5SjNO5CAIYoSsMjAOyrFkzF6qNonT8=" alt="User img" className='rounded-full border-4 border-cyan-500'/>

                    <p className='text-xl mt-3 font-semibold'>ROBIN KEYMAN</p>

                    <img src="	https://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/signature.png" alt="User signature" className='w-[120px] mt-5' />
                    </div>

                    <div className="text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br></br> Officiis ducimus quo sapiente? Vitae repudiandae doloremque<br></br> sunt fugit veniam corrupti! Voluptates optio, accusamus porro<br></br> iste totam modi voluptatum sunt temporibus rem molestiae.<br></br> Non ex recusandae repellendus, id ipsum veniam sint optio?</p>
                    </div>
                </div>
                
            </div>

            <div className="kids-thought w-2/5 bg-gradient-to-r from-cyan-600 to-cyan-400 p-6 ml-10 text-white">
            <h1 className='text-3xl font-bold'>A KID’S THOUGHT</h1>
                <span className='divider w-2/5'></span>
                <p>What do our smallest patient say?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut commodi reprehenderit nisi nesciunt? Recusandae quo nobis maiores, doloribus voluptates a veritatis autem dolore aspernatur vel inventore mollitia perspiciatis, labore quidem quia numquam! Laboriosam vitae quam, suscipit error dolor quas cum repudiandae atque, quae asperiores, libero voluptatibus.</p>

                <button className='btn btn-sm btn-outline mt-5 text-white'>Read More</button>
            </div>
        </div>
    );
};

export default Testimonials;