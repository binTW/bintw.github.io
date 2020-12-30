<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'rivervalleystyledb' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Y Y)Dm_[&_UGgru*{I^xZ9USuF:4?ZTD/K*c0!Df9wKKp^CO{uL`Hpe;|#xjTct=' );
define( 'SECURE_AUTH_KEY',  'EIOFXM}HhwO`gOks:!1QI{}MGtUwUKDXZ:LScC1m=JHFQ]_`x^@Ce|ue_j(3&-V7' );
define( 'LOGGED_IN_KEY',    'hx}^6ofXE5vU*y<G-wXamuXj(#g% t4^7@nNV$D7?0A|!CJF4b;:O~MT()cUP<O>' );
define( 'NONCE_KEY',        ';fIl?+^:J*y15E B)^g//c)EbA~WGDcQX`N3w+B74eJq?%MqalO-*0ImTA4J<~`c' );
define( 'AUTH_SALT',        'k1DD&~4N eZyeXgTV2v@[Ypy<wZ]ar?a8B<p>{J#`!yIOl&j^V:p&AS7;hg!tN=5' );
define( 'SECURE_AUTH_SALT', 'g&l6iGs?)$0y$qugRo=d)`f=LfN~U!I1f3=v#TA2.B8#6u|wF6YJWHF`r!s/aj&N' );
define( 'LOGGED_IN_SALT',   'S%z^T<PM:q>.2MslXS4#TVd2PtPqOhKB^e_[P{?Pcs3{[-r9j~L|rc[;q#cLHw!-' );
define( 'NONCE_SALT',       's3,kH8<-zR=Ckfn(K.BF}T$6^A3Zjxs6?z^_gv=q31*=G<pXlBtgG-:Ib<Hb<QKW' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
