"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { motion } from "motion/react";
import { GlassWater } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/constants";
import useSWR from "swr";
import { Input } from "./ui/input";
import useOrderStore from "@/store/order";
import { Location, Lodge } from "@/types";

const images = [
  "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const SelectLocation = () => {
  const router = useRouter();
  const [lodges, setLodges] = useState<Lodge[]>();
  const { data } = useSWR("locations");
  const [orderDetail, setOrderDetail] = useState<{
    location?: Partial<Location>;
    lodgeId: string;
    roomNumber: string;
    noOfGallon: string;
  }>({
    location: {},
    lodgeId: "",
    roomNumber: "",
    noOfGallon: "",
  });
  const { addOrderDetail } = useOrderStore();

  const bookNow = () => {
    addOrderDetail(orderDetail);
    router.push("/summary");
  };

  useEffect(() => {
    const getLodges = async () => {
      const locationId = orderDetail?.location && orderDetail?.location.id;
      const response = await api.get(`locations/${locationId}/lodges`);
      setLodges(response.data?.data?.lodges);
    };

    if (orderDetail) {
      getLodges();
    }
  }, [orderDetail.location, orderDetail]);

  return (
    <div className="flex flex-col gap-5 border p-10 rounded-lg w-[90vw] md:w-[400px]">
      <span className="text-sm text-gray-400">Select Location: </span>
      <Select
        onValueChange={(value) =>
          setOrderDetail({
            ...orderDetail,
            location: JSON.parse(value) as Location,
          })
        }
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Pick location" />
        </SelectTrigger>
        <SelectContent>
          {data?.data.payload.map((location: Location) => (
            <SelectItem key={location.id} value={JSON.stringify(location)}>
              {location.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span className="text-sm text-gray-400">Select Lodge: </span>
      <Select
        onValueChange={(value) =>
          setOrderDetail({
            ...orderDetail,
            lodgeId: value,
          })
        }
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Pick lodge" />
        </SelectTrigger>
        <SelectContent>
          {lodges?.map((lodge: Lodge) => (
            <SelectItem key={lodge.id} value={lodge.id}>
              {lodge.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center items-center group/modal-btn w-full md:w-fit">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Order Now
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <GlassWater />
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="px-4 sm:px-6 md:px-10 py-6 rounded-t-2xl">
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Book your water from{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Mmiri
              </span>{" "}
              now!
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                >
                  <img
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div>
              <div className="flex flex-col gap-5 p-10 rounded-lg w-full">
                <span className="text-sm text-gray-400">Room: </span>
                <Input
                  onChange={(e) =>
                    setOrderDetail({
                      ...orderDetail,
                      roomNumber: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="e.g Second Floor, Rm 14"
                />
                <span className="text-sm text-gray-400">
                  Number of Gallon:{" "}
                </span>
                <Input
                  onChange={(e) =>
                    setOrderDetail({
                      ...orderDetail,
                      noOfGallon: e.target.value,
                    })
                  }
                  type="number"
                  placeholder="e.g 10"
                />
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <div
              onClick={bookNow}
              className="bg-black text-center text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28 cursor-pointer"
            >
              Book Now
            </div>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default SelectLocation;
