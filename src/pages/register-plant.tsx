const RegisterPlant = () => {
    return (
        <main className="flex w-screen border justify-center">
            <form action="" className="flex flex-col flex-1 gap-4 p-12">
                <section className="border">
                    <h1 className="font-play-display text-5xl font-bold mb-3">Register Plant</h1>
                    <h3>Lorem Ipsum</h3>
                </section>
                <div className="input-group">
                    <label htmlFor="plant-name" >Plant Name</label>
                    <input type="text" name="plant-name" id="plant-name" placeholder="Echinocereus Cactus" />
                </div>
                <div className="input-group">
                    <label htmlFor="plant-subtitle" >Plant Subtitle</label>
                    <input type="text" name="plant-subtitle" id="plant-subtitle" placeholder="A majestic addition to your plant collection" />
                </div>
                <div className="input-group">
                    <label htmlFor="category" >Category</label>
                    <input type="text" name="category" id="category" placeholder="Cactus" />
                </div>
                <button type="submit">Submit</button>
            </form>
            <aside className="border flex-1">
                <img src="../assets/image/plant1.png" alt="imagem de uma planta em um vaso" />
            </aside>
        </main>
    )
}

export default RegisterPlant