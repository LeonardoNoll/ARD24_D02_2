const RegisterPlant = () => {
    return (
        <main className="flex w-screen border justify-center">
            <form action="" className="flex flex-col flex-1 p-12">
                <section className="border">
                    <h1 className="font-play-display text-5xl font-bold mb-3">Register Plant</h1>
                    <h3>Lorem Ipsum</h3>
                </section>
                <div className="flex flex-col mb-6 gap-2">
                    <label htmlFor="plant-name" className="font-inter font-md">Plant Name</label>
                    <input type="text" name="plant-name" id="plant-name" placeholder="Echinocereus Cactus" className="bg-slate-100 rounded-sm border-1 border-slate-200 p-2" />
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