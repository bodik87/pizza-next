import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

type ProductSize = {
  s1: string;
  s2: string;
  s3: string;
};

type PizzaDoughThickness = {
  think: string;
  traditional: string;
};

type ProductWeight = {
  w1: string;
  w2?: string;
  w3?: string;
};

type AdditionalProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
};

interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  size?: ProductSize;
  doughThickness?: PizzaDoughThickness;
  weight: ProductWeight;
  additionalGoods?: AdditionalProduct[];
  images: string[];
  oldPrice?: number | false;
  price: number;
}

type Props = { product: Product };

export default function GoodCard({ product }: Props) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <article className="flex flex-col mb-8 ">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              onClick={closeModal}
              className="fixed inset-0 bg-black bg-opacity-75"
            />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto flex min-h-full items-center justify-center p-0 md:p-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex w-screen sm:max-w-5xl h-screen md:h-[600px] bg-white transform rounded-none md:rounded-3xl overflow-hidden ">
                <Image
                  onClick={closeModal}
                  className="absolute top-5 right-5 opacity-75 hover:opacity-100 transition-all cursor-pointer z-30"
                  src="/closeBtn.svg"
                  alt="Close"
                  priority
                  width={20}
                  height={20}
                />
                <main className="w-full h-full flex flex-col p-4 md:flex-row gap-3">
                  <Image
                    className="w-full md:w-1/2 h-1/3 md:h-auto object-contain rounded-2xl"
                    src={product.images[0]}
                    alt={product.title}
                    priority
                    width={400}
                    height={400}
                  />
                  <div className="w-full h-2/3 md:h-auto md:w-1/2 flex flex-col text-left">
                    <h3 className="text-2xl font-medium leading-6 text-black">
                      {product.title}
                    </h3>
                    <p className="my-2 text-sm text-black">
                      {product.description}
                    </p>
                    <div className="flex-grow pr-4 mb-2 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-200">
                      {product.category === "pizza" && (
                        <div className="filterWrapper">
                          <div className="w-1/3 h-8 bg-white shadow-[0_3px_12px_-7px_rgba(0,0,0,0.7)] py-1 px-6 rounded-2xl transition-all duration-500" />
                          <div
                            className={`absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-around text-gray-500 py-1 z-10 transition-all duration-500 select-none`}
                          >
                            <span className="cursor-pointer hover:text-black transition-all">
                              {product.size?.s1}
                            </span>
                            <span className="cursor-pointer hover:text-black transition-all">
                              {product.size?.s2}
                            </span>
                            <span className="cursor-pointer hover:text-black transition-all">
                              {product.size?.s3}
                            </span>
                          </div>
                        </div>
                      )}

                      {product.category === "pizza" && (
                        <div className="filterWrapper">
                          <div className="w-1/2 h-8 bg-white shadow-[0_3px_12px_-7px_rgba(0,0,0,0.7)] py-1 px-6 rounded-2xl transition-all duration-500" />
                          <div
                            className={`absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-around text-gray-500 py-1 z-10 transition-all duration-500 select-none`}
                          >
                            <span className="cursor-pointer hover:text-black transition-all">
                              {product.doughThickness?.think}
                            </span>
                            <span className="cursor-pointer hover:text-black transition-all">
                              {product.doughThickness?.traditional}
                            </span>
                          </div>
                        </div>
                      )}
                      {product.category === "pizza" && (
                        <h2 className="mt-4 mb-2 text-xl font-medium text-black">
                          Додатково замовити
                        </h2>
                      )}
                      <div className="grid grid-cols-4 md:grid-cols-4 gap-2">
                        {product.additionalGoods?.map((additional) => (
                          <div
                            key={additional.id}
                            className="p-2 shadow-[0_7px_7px_-5px_rgba(0,0,0,0.15)] rounded-xl bg-white border border-gray-200"
                          >
                            <Image
                              className="rounded-xl mb-2"
                              src={additional.image}
                              alt={additional.title}
                              priority
                              width={200}
                              height={200}
                            />

                            <h3 className="text-sm">{additional.title}</h3>
                            <p className="text-center font-medium">
                              {additional.price} грн
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="w-full rounded-2xl border border-transparent bg-orange-500 px-8 py-3 text-base font-normal text-white hover:bg-orange-400 active:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 whitespace-nowrap"
                      onClick={closeModal}
                    >
                      Додати в кошик за {product.price} грн
                    </button>
                  </div>
                </main>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Image
        className="rounded-xl mb-2"
        src={product.images[0]}
        alt={product.title}
        priority
        width={300}
        height={300}
      />
      <p className="font-medium text-xl mb-2">{product.title}</p>
      <p className="text-[#5C6370] text-sm mb-4">{product.description}</p>
      <div className="flex w-full justify-between items-center mt-auto">
        <div className="flex flex-col ">
          <p className="font-medium text-xl">{`${
            product?.oldPrice ? "від" : ""
          } ${product.price} грн`}</p>
          {product.oldPrice && (
            <p className="text-[#5C6370] font-medium text-base">
              {product.oldPrice} грн
            </p>
          )}
        </div>
        <button
          onClick={openModal}
          className="bg-[#ffe3d1] hover:bg-[#ffccad] active:bg-[#ffba8f] py-2 px-5 rounded-full"
        >
          В кошик
        </button>
      </div>
    </article>
  );
}
