

export const OfferCreate = () => {
    return (
        <main className="create-offer">
            <section id="create-page" className="create-page">
                <form id="create">
                    <div className="container">
                        <h1>Create Offer</h1>
                        <label className="input-title" htmlFor="combine-title">Combine Name</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter combine name..."
                        />
                        <label className="input-title" htmlFor="model">Model:</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Enter combine model..."
                        />
                        <label className="input-title" htmlFor="width">Header Width:</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Enter header width..."
                        />
                        <label className="input-title" htmlFor="combine-img">Image:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="Upload a photo..."
                        />
                        <label className="input-title" htmlFor="descriptio">Description:</label>
                        <textarea name="summary" id="summary" defaultValue={""} />
                        <button className="btn submit" type="submit" defaultValue="Create Offer"> Create </button>
                    </div>
                </form>
            </section>
        </main>
    );
}