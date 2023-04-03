export const PasswordLevelList = ({
  simpleColor,
  mediumColor,
  secureColor,
}) => {
  return (
    <ul>
      <li style={{ color: simpleColor }} className="password-level">
        The password is easy
      </li>
      <li style={{ color: mediumColor }} className="password-level">
        The password is medium
      </li>
      <li style={{ color: secureColor }} className="password-level">
        The password is strong
      </li>
    </ul>
  );
};
