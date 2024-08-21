import Button from "../../../components/Button";
import {useAuth} from "../hooks/useAuth";
import {ButtonsContainer, DescriptionContainer} from "../../../components/Container";

const LogoutForm = ({onCancel}) => {
  const {logout} = useAuth();

  const handleLogout = async () => {
    await logout().then(() => onCancel());
  };

  return (
    <>
      <DescriptionContainer>
    Biztosan kijelentkezik?
      </DescriptionContainer>
      <ButtonsContainer>
        <Button
          type="button"
          variant={"warning"}
          onClick={handleLogout}>Kijelentkezés</Button>
        <Button
          type="button"
          variant={"cancel"}
          onClick={onCancel}>Mégsem</Button>
      </ButtonsContainer>
    </>
  );
};

export default LogoutForm;
