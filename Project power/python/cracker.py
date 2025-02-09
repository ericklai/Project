import hashlib
import itertools
import string

def hash_password(password):
    """Hash a password using SHA-256."""
    return hashlib.sha256(password.encode()).hexdigest()

def brute_force(target_hash, charset, max_length):
    """Brute-force a password hash."""
    for length in range(1, max_length + 1):
        for attempt in itertools.product(charset, repeat=length):
            attempt_str = ''.join(attempt)
            attempt_hash = hash_password(attempt_str)
            if attempt_hash == target_hash:
                return attempt_str
    return None

# Example usage
if __name__ == "__main__":
    target_hash = "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd456f6481f1e5b6bff"  # Example SHA-256 hash of "password"
    charset = string.ascii_lowercase + string.digits
    max_length = 8

    cracked_password = brute_force(target_hash, charset, max_length)

    if cracked_password:
        print(f"Password cracked: {cracked_password}")
    else:
        print("Password not found within the given constraints.")