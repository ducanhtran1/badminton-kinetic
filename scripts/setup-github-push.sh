#!/usr/bin/env bash
# Thiết lập để git push lên GitHub (chạy: bash scripts/setup-github-push.sh)
set -e

echo "=== 1. Git credential helper (HTTPS + token) ==="
git config --global credential.helper osxkeychain
echo "Đã bật: credential.helper = osxkeychain"
echo ""

echo "=== 2. Remote dùng SSH (sau khi thêm SSH key lên GitHub) ==="
REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_DIR"
git remote set-url origin git@github.com:ducanhtran1/badminton-kinetic.git
echo "Đã đặt origin → git@github.com:ducanhtran1/badminton-kinetic.git"
echo ""

echo "=== 3. Public key — COPY dòng dưới vào GitHub ==="
echo "    https://github.com/settings/ssh/new"
echo ""
cat ~/.ssh/id_ed25519.pub
echo ""
echo "=== 4. Kiểm tra (sau khi dán key trên web) ==="
echo "    ssh-add ~/.ssh/id_ed25519"
echo "    ssh -T git@github.com"
echo "    (mong đợi: Hi ducanhtran1! ...)"
echo ""
echo "=== 5. Push ==="
echo "    git push -u origin main"
echo ""
echo "--- Nếu muốn dùng HTTPS thay vì SSH ---"
echo "    git remote set-url origin https://github.com/ducanhtran1/badminton-kinetic.git"
echo "    Tạo PAT: GitHub → Settings → Developer settings → Personal access tokens"
echo "    Quyền: repo. Khi push, username: ducanhtran1, password: dán token."
echo ""
echo "--- Xóa mật khẩu GitHub cũ trong Keychain (nếu push vẫn sai account) ---"
echo "    printf 'host=github.com\\nprotocol=https\\n' | git credential-osxkeychain erase"
