const filterServices = (services, filters) => {
    let arr = [];
    if (services && filters.length !== 0) {
        arr = services.filter((item) => {
            for (let i = 0; j < item.categorias.length; j++) {
                if (item.categorias[j].id === filters[i]) {
                    coincidences += 1;
                }
            }
            /* let coincidences = 0;
            for (let i = 0; i < filters.length; i++) {
                for (let j = 0; j < item.categorias.length; j++) {
                    if (item.categorias[j].id === filters[i]) {
                        coincidences += 1;
                    }
                }
            }
            if (coincidences === filters.length) {
                return true;
            }
            return false; */
        );
    return arr;
    }
    console.log(services);
        return services;
};

export default filterServices;
