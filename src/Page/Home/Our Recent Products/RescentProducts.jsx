import products1 from '../../../../src/assets/Products/Complex Data.png'
import products2 from '../../../../src/assets/Products/Products2.png'
import products3 from '../../../assets/Products/Products3.png'

const RescentProducts = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className=" ">
          <h1 className="text-2xl font-bold text-gray-800 capitalize lg:text-4xl dark:text-white">Our Products</h1>
          <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>
          
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {/* Post 1 */}
          <div>
            <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={products1} alt="" />

            <div className="mt-8">
              <span className="text-blue-500 uppercase">Task Mangement</span>

              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                What do you want to know about UI
              </h1>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
             This is task Mangement website . This is awsome ui components and its responsive all devices-mobile , tablet, laptop and desktop
              </p>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                    Rk Ripon Khan
                  </a>

                  <p className="text-sm text-gray-500 dark:text-gray-400">December 21, 2023</p>
                </div>

                <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div>
            <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={products2} alt="" />

            <div className="mt-8">
              <span className="text-blue-500 uppercase">Learning and Teaching Platfrom</span>

              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                All the features you want to know
              </h1>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
              This is a Learning and Teaching Website . You can publish here your course . Anyone can purchase your course . Implement dashboard here .
              </p>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                   Rk Ripon Khan
                  </a>

                  <p className="text-sm text-gray-500 dark:text-gray-400">December 5, 2023</p>
                </div>

                <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
              </div>
            </div>
          </div>

          {/* Post 3 */}
          <div>
            <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={products3} alt="" />

            <div className="mt-8">
              <span className="text-blue-500 uppercase">Dashboard</span>

              <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
              Descripon on ours Awosome Dashboard
              </h1>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
              This is a Learning and Teaching Website . You can publish here your course . Anyone can purchase your course . Implement dashboard here .
              </p>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <a href="#" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                 Rk Ripon Khan
                  </a>

                  <p className="text-sm text-gray-500 dark:text-gray-400">Dcember 1, 2023</p>
                </div>

                <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default RescentProducts;