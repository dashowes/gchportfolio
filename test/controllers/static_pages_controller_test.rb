require 'test_helper'

class StaticPagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
    assert_select "title", "Geoffrey C. Howes"
  end

  test "should get about" do
    get :about
    assert_response :success
    assert_select "title", "About | Geoffrey C. Howes"
  end

  test "should get bibliography" do
    get :bibliography
    assert_response :success
    assert_select "title", "Bibliography | Geoffrey C. Howes"
  end

  test "should get contact" do
    get :contact
    assert_response :success
    assert_select "title", "Contact | Geoffrey C. Howes"
  end

end
