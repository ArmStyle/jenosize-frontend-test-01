import React from "react";
import { useRouter } from "next/router";
import { makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    zindex: 1500,
  },
  menuContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottom: "#eee 2px solid",
  },
  menu: {
    "&:hover": {
      cursor: "pointer",
    },
    margin: "0px 12px",
    padding: 10,
    color: theme.palette.text.primary,
  },
  menuActive: {
    padding: 10,
    borderRadius: 5,
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
  menuItem: {
    width: "100%",
    textAlign: "center",
    borderRight: "#eee 1px solid",
  },
}));

const MenuContainer = (props) => {
  const { name, pathname, active, router } = props;
  const classes = useStyles();

  const handleClick = () => {
    router.push(`${pathname}`);
  };

  return (
    <div
      className={clsx(classes.menu, active && classes.menuActive)}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};

let menus = [];

export default function Menu() {
  const classes = useStyles();
  const router = useRouter();
  const [currentPath, setCurrentPath] = React.useState("");

  React.useEffect(() => {
    if (router) {
      setCurrentPath(router.asPath);
    }
  }, [router]);
  menus = [
    {
      name: "Submission",
      pathActives: [`/statistic?action=submission`],
      pathname: `/statistic?action=submission`,
    },
    {
      name: "Engagement",
      pathActives: [`/statistic?action=engagement`],
      pathname: `/statistic?action=engagement`,
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.menuContainer}>
        {menus.map((menu) => {
          let active = menu.pathActives.includes(currentPath);
          return (
            <div key={menu.pathname} className={classes.menuItem}>
              <MenuContainer
                name={menu.name}
                pathname={menu.pathname}
                active={active}
                router={router}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
