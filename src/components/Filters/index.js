import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "@/styles/components/filters.module.css";
import stylesModal from "@/styles/components/modal.module.css";
import Button from "@/components/Buttons";
import { SweetAlertBasic } from "@/utils/components/sweet";
import { TextInput } from "@/components/Inputs";
import { useRouter } from "next/router";
import { Modal } from "@/components/Modal";
import { countries, genders, states } from "@/utils/components/inputs";
import { SelectInput } from "@/components/Inputs/select";
import { createUser } from "../../../redux/actions/user";



const Filters = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (url) => {
    router.push(url);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [userData, setUserData] = useState({
    name: "",
    country: "",
    state: "",
    gener: "",
  });

  const handleCreate = () => {

    if (!userData.name || !userData.country || !userData.state || !userData.gener) {
      SweetAlertBasic(
        "error",
        "Ups",
        "todos los campos son obligatorios."
      );
      return;
    }
    
    //Generate ID
    const randomId = Math.floor(Math.random() * 1000);
    
    const randomAvatar = "avatar_" + randomId;
    
    // Create of object for new user
    const newUser = {
      id: randomId,
      name: userData.name,
      country: userData.country,
      state: userData.state,
      gener: userData.gener,
      avatar: randomAvatar,
    };

    dispatch(createUser(newUser));

    setUserData({
      name: "",
      country: "",
      state: "",
      gener: "",
    })
    closeModal();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className={styles.filter}>
      <div className={styles.section_filter}>
        <Button
          text="Filters"
          onClick={() => handleClick("filter")}
          typeCss={"button_white_border"}
          icon={"icon_filter.svg"}
        />
      </div>
      <div className={styles.add_filter}>
        <Button
          text="País: México"
          onClick={() => handleClick("filter")}
          typeCss={"button_blue_light"}
          icon={"icon_x.svg"}
          iconPosition="end"
        />

        <Button
          text="Estado: CDMX"
          onClick={() => handleClick("filter")}
          typeCss={"button_blue_light"}
          icon={"icon_x.svg"}
          iconPosition="end"
        />
      </div>
      <div className={styles.search_new_filter}>
        <TextInput
          typeInput="text"
          placeHolder="Search"
          icon={"icon_search.svg"}
        />
        <Button
          text="Nuevo Usuario"
          onClick={openModal}
          typeCss={"button_blue"}
          icon={"icon_plus.svg"}
          iconPosition="start"
          buttonWidth="250px"
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.text_modal}>
          <p className={stylesModal.title_modal}>Agregar Nuevo Usuario</p>
          <p className={stylesModal.subtitle_modal}>
            This blog post has been published. Team members will be able to edit
            this post and republish changes.
          </p>
        </div>

        <div className={stylesModal.inputs_modal}>
          <TextInput
            name="name"
            typeInput="text"
            placeHolder="Marta Sahagun"
            label={"Nombre"}
            value={userData.name}
            onChange={(e) => handleInputChange(e)}
            />
          <SelectInput
            name="country"
            options={countries}
            placeHolder="Selecciona un país"
            label="País"
            value={userData.country}
            onChange={(e) => handleInputChange(e)}
            />
          <SelectInput
            name="state"
            options={states}
            placeHolder="Selecciona un estado"
            label="Estado"
            value={userData.state}
            onChange={(e) => handleInputChange(e)}
            />
          <SelectInput
            name="gener"
            options={genders}
            placeHolder="Selecciona un género"
            label="Género"
            value={userData.gener}
            onChange={(e) => handleInputChange(e)}
            />
        </div>

        <div className={`flex flex-col ${stylesModal.buttons_modal}`}>
          <Button
            text="Cancel"
            onClick={closeModal}
            typeCss={"button_white_border"}
            buttonWidth="100%"
            className="w-1/2"
          />
          <Button
            text="Confirm"
            typeCss={"button_blue"}
            onClick={() => handleCreate("confirm")}
            buttonWidth="100%"
            className="w-1/2"
          />
        </div>
      </Modal>
    </section>
  );
};

export { Filters };
